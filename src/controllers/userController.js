const sql = require('../config/db');
const clerkClient = require('../config/clerkClient');

const getSessionListClerk = async (req, res) => {
  try {
    const { user_id } = req.body

    const sessions = await clerkClient.sessions.getSessionList({
      userId: user_id
    })

    if (!sessions || sessions.length === 0) {
      return res.status(200).json({
        message: 'No active sessions found.'
      })
    }
    res.status(200).json(sessions)
  } catch (error) {
    console.error('Error fetching sessions list:', error)
    res.status(500).json({ error: 'Error fetching sessions list', message: error.message })
  }
}

// Función para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const result = await sql`SELECT * FROM users`;
    res.status(200).json({
      status: 'success',
      data: result,
    });
    const clientList = await clerkClient.clients.getClientList()
    console.log(clientList)
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching users',
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const result = await sql`SELECT * FROM users where id = ${userId}`

    if (result.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      })
    }

    res.status(200).json({
      status: 'success',
      data: result[0]
    })
  } catch (err) {
    console.log('Error fetching user:', err)
    res.status(500).json({
      status: 'error',
      message: 'Error fetching user'
    })
  }
}

// Función para obtener un usuario por clerk_id
const getUserByClerkId = async (req, res) => {
  try {
    const clerkId = req.params.clerkId;  // Obtener el clerk_id del parámetro de la ruta
    const result = await sql`SELECT * FROM users WHERE clerk_id = ${clerkId}`;

    if (result.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: result[0],
    });
  } catch (err) {
    console.error('Error fetching user by clerkId:', err);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching user by clerkId',
    });
  }
};

module.exports = {
  getSessionListClerk,
  getAllUsers,
  getUserById,
  getUserByClerkId
};
