import{nodemailer} from 'nodemailer';

const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, message, recipientEmail } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail', // Cambia esto según tu proveedor de correo
    auth: {
      user: 'isra.almanzagonzalez@gmail.com', // Tu dirección de correo electrónico
      pass: 'ccdfwfhuhoqodeci' // Tu contraseña de correo electrónico
    }
  });

  let mailOptions = {
    from: email,
    to: recipientEmail,
    subject: `Nuevo mensaje de ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));


