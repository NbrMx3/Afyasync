import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { ensureDatabaseSchema, pool } from './db.js';
import { createPatient, deletePatient, getPatientById, listPatients, updatePatient } from './patients.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'afyasyncc-server',
  });
});

app.get('/api/db-test', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS now');
    res.json({
      ok: true,
      database: 'connected',
      time: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      database: 'disconnected',
      message: error instanceof Error ? error.message : 'Unknown database error',
    });
  }
});

app.get('/api/patients', async (_req, res) => {
  try {
    const patients = await listPatients();
    res.json({ data: patients });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to fetch patients',
    });
  }
});

app.get('/api/patients/:id', async (req, res) => {
  try {
    const patient = await getPatientById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    return res.json({ data: patient });
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to fetch patient',
    });
  }
});

app.post('/api/patients', async (req, res) => {
  try {
    const patient = await createPatient(req.body);
    res.status(201).json({ data: patient });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to create patient',
    });
  }
});

app.put('/api/patients/:id', async (req, res) => {
  try {
    const patient = await updatePatient(req.params.id, req.body);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    return res.json({ data: patient });
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to update patient',
    });
  }
});

app.delete('/api/patients/:id', async (req, res) => {
  try {
    const deleted = await deletePatient(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to delete patient',
    });
  }
});

async function start() {
  try {
    await ensureDatabaseSchema();

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

start();
