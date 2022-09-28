const { User } = require('../../database/models');

const getAllUsersService = async () => {
  const users = await User.findAll();
  const sellers = users.filter((user) => user.role === 'seller');

  const renderSellers = sellers.map((seller) => {
    const sellerPersonalite = {
      id: seller.id,
      name: seller.name,
      email: seller.email,
      role: seller.role,
    };
    return sellerPersonalite;
  });
  return renderSellers;
};

module.exports = {
  getAllUsersService,
};
