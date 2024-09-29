import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = [
    { email: 'user1@example.com', nome: 'User One', perfil: 'Administrador', telefone: '(99) 9 9999-9999', idade: 25 },
    { email: 'user2@example.com', nome: 'User Two', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 30 },
    { email: 'user3@example.com', nome: 'User Three', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 22 },
    { email: 'user40@example.com', nome: 'User Forty', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 28 },
      // Continuando a adicionar mais 35 usuários
      { email: 'user41@example.com', nome: 'User Forty-One', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 24 },
      { email: 'user42@example.com', nome: 'User Forty-Two', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 27 },
      { email: 'user43@example.com', nome: 'User Forty-Three', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 21 },
      { email: 'user44@example.com', nome: 'User Forty-Four', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 29 },
      { email: 'user45@example.com', nome: 'User Forty-Five', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 31 },
      { email: 'user46@example.com', nome: 'User Forty-Six', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 23 },
      { email: 'user47@example.com', nome: 'User Forty-Seven', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 26 },
      { email: 'user48@example.com', nome: 'User Forty-Eight', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 28 },
      { email: 'user49@example.com', nome: 'User Forty-Nine', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 32 },
      { email: 'user50@example.com', nome: 'User Fifty', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 25 },
      { email: 'user51@example.com', nome: 'User Fifty-One', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 30 },
      { email: 'user52@example.com', nome: 'User Fifty-Two', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 22 },
      { email: 'user53@example.com', nome: 'User Fifty-Three', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 28 },
      { email: 'user54@example.com', nome: 'User Fifty-Four', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 24 },
      { email: 'user55@example.com', nome: 'User Fifty-Five', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 27 },
      { email: 'user56@example.com', nome: 'User Fifty-Six', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 21 },
      { email: 'user57@example.com', nome: 'User Fifty-Seven', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 29 },
      { email: 'user58@example.com', nome: 'User Fifty-Eight', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 31 },
      { email: 'user59@example.com', nome: 'User Fifty-Nine', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 23 },
      { email: 'user60@example.com', nome: 'User Sixty', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 26 },
      { email: 'user61@example.com', nome: 'User Sixty-One', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 28 },
      { email: 'user62@example.com', nome: 'User Sixty-Two', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 32 },
      { email: 'user63@example.com', nome: 'User Sixty-Three', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 25 },
      { email: 'user64@example.com', nome: 'User Sixty-Four', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 30 },
      { email: 'user65@example.com', nome: 'User Sixty-Five', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 22 },
      { email: 'user66@example.com', nome: 'User Sixty-Six', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 28 },
      { email: 'user67@example.com', nome: 'User Sixty-Seven', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 24 },
      { email: 'user68@example.com', nome: 'User Sixty-Eight', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 27 },
      { email: 'user69@example.com', nome: 'User Sixty-Nine', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 21 },
      { email: 'user70@example.com', nome: 'User Seventy', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 29 },
      { email: 'user71@example.com', nome: 'User Seventy-One', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 31 },
      { email: 'user72@example.com', nome: 'User Seventy-Two', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 23 },
      { email: 'user73@example.com', nome: 'User Seventy-Three', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 26 },
      { email: 'user74@example.com', nome: 'User Seventy-Four', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 28 },
      { email: 'user75@example.com', nome: 'User Seventy-Five', perfil: 'Usuário Comum', telefone: '(99) 9 9999-9999', idade: 32 }
  ];
  

  for (const user of users) {
	await prisma.user.create({
	  data: user,
	});
  }
}

main()
  .catch(e => {
	console.error(e);
	process.exit(1);
  })
  .finally(async () => {
	await prisma.$disconnect();
  });