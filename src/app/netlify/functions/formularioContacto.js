// export.handler = async (event, context) => {
//   const { name, email, message } = JSON.parse(event.body);
//   const body = JSON.stringify({ name, email, message });
//   const response = await fetch('https://api.netlify.com/api/v1/forms/5b6a9b1e-6a0e-4c0b-a6c9-7a0d9b9c7c0d/submissions', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${process.env.NETLIFY_API_KEY}`
//     },
//     body
//   });
//   return {
//     statusCode: 405,
//     message: 'Metodo no soportado',
//   }
// }

exports.handler = async (event, context) => {
      switch (event.httpMethod) {
        case 'POST':
          const params = JSON.parse(event.body);
          console.log('RECIBI UNA SOLICITUD',params);
          return;
        default:
          return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Metodo no soportado' }),
        };
      }
  }
