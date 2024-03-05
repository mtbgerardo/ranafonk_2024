import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <p><strong>Has recibido un mensaje de, {name}!</strong></p>
    <p>email: {email}</p>
    <p>Mensaje: {message}</p>
  </div>
);