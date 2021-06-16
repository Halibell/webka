exports.seed = async (knex) => {
  await knex('contacts').del();

  await knex('contacts').insert([
    {
      name: 'Vitalii',
      surname: 'Ileiko',
      phone: '324657984',
      email: 'vetal.ileiko@gmail.com',
    },
    {
      name: 'Roma',
      surname: 'Makarenko',
      phone: '549832112',
      email: 'Romchik1111@gmail.com',
    },
  ]);
};
