const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhi@15012002',
    database: 'rrrlfdb',
  });

// Connect to MySQL
db.connect(err => {
    if (err) {
      console.error('MySQL connection error:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });  

app.use(express.json());  

  app.get('/getAll', (req, res) => {
    db.query('SELECT * FROM m_allscheme_consolidated_data', (err, results) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/getBeneficiary', (req, res) => {
    db.query('SELECT * FROM m_beneficiary_registration', (err, results) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/getState', (req, res) => {
    db.query('SELECT * FROM m_state', (err, results) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/getDistrict', (req, res) => {
      db.query('SELECT * FROM m_district', (err, results) => {
        if (err) {
          console.error('MySQL query error:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      });
    });  
  
  app.get('/getLibraries', (req, res) => {
      db.query('SELECT * FROM m_libraries', (err, results) => {
        if (err) {
          console.error('MySQL query error:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      });
    });  
  
  app.get('/getItems', (req, res) => {
      db.query('SELECT * FROM m_item', (err, results) => {
        if (err) {
          console.error('MySQL query error:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      });
    });
  
  app.get('/getScheme', (req, res) => {
      db.query('SELECT * FROM m_scheme', (err, results) => {
        if (err) {
          console.error('MySQL query error:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      });
    });  
  
  app.get('/getSchemeId', (req, res) => {
      db.query('SELECT * FROM m_scheme_application_id', (err, results) => {
        if (err) {
          console.error('MySQL query error:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      });
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
      });    