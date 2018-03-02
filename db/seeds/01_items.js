
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items')
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'brad', description: 'handsome', price: '2.00', user_id: 9, item_status_id: 13, condition_id: 23, category_id: 22},
        {name: 'zubin', description: 'beautiful', price: '2.00', user_id: 10, item_status_id: 14, condition_id: 22, category_id: 23},
      ]);
    });
};
