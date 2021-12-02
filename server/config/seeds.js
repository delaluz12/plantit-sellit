const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Herbs' },
    { name: 'Vegetables' },
    { name: 'Flowering Plants' },
    { name: 'House Plants' },
    { name: 'Succulents' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Italian Oregano Live Cutting',
      description:
        'Oregano is the key flavor in Italian food. The soft, fragrant green leaves are the secret little green flecks in the pasta sauce that gives it its mouth watering fragrance and taste. A lovely perennial for borders or patio containers. Tiny, rose pink flowers appear in the summer. This listing is for one rooted 4” - 6” cutting. Does not ship with pot.',
      image: '1489734467e69ade4e8fe6cad5f1f351',
      category: categories[0]._id,
      price: 4.50,
      quantity: 20
    },
    {
      name: 'Rosemary Live Cutting',
      description:
        'Hailing from the shores of the Mediterranean Sea, rosemary does best in warm areas with fair humidity, where it can grow into a shrub several feet in height. Rosemary is often used for seasoning poultry, lamb, stews, and soups. This listing is for one rooted 4” - 6” cutting. Does not ship with pot.',
      image: 'f4a02957d07e1c05a4379ac088bc60f9',
      category: categories[0]._id,
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Longevity Spinach',
      category: categories[1]._id,
      description:
        'You will receive 10 Longevity Spinach cuttings, leaves removed, wrapped in a moist paper towel to prevent dehydration. Be ready to self root and keep them moist. Touted to have many medicinal benefits, particularly in Asian cuisine.',
      image: 'e1eac4fe197f030478a23048c0d7a30f',
      price: 14.99,
      quantity: 20
    },
    {
      name: 'Cassava Cuttings',
      category: categories[1]._id,
      description:
        '5 fresh cuttings of cassava that are at least 6 inches long. Very easy to grow and a great source of food. Grown without use of pesticides and chemicals.',
      image: 'bda4cf82bf5692497d2002a0f9d28e8d',
      price: 9.99,
      quantity: 20
    },
    {
      name: 'Eggplant Sprout',
      category: categories[1]._id,
      description:
        'This listing is for one 100% organic Black Beauty Eggplant plant. Plant is guaranteed to be at least 8 inches tall. Plant is hardened off and ready to transplant into the ground or container!',
      image: '4116cf977d7ec04aa8432a6e494dbd44',
      price: 5.99,
      quantity: 20
    },
    {
      name: 'Sweet Potato Slips',
      category: categories[1]._id,
      description:
        'Sweet potatoes are tender, warm-season perennial plants grown as annuals. Sweet potatoes are easily trained onto trellises, lattice, or wires strung between sturdy poles. These are 3 rooted 4" - 6" cuttings. Yields large size sweet potatoes in 4-5 months',
      image: 'df6453651200a7495cfe68ffccdf2a5a',
      price: 6.75,
      quantity: 20
    },
    {
      name: 'New Dawn Rose',
      category: categories[2]._id,
      description:
        'New Dawn rose is a climber that is easy to root, also very diseases resistant and requires minimal care. These large roses will bring both color and elegance to your home and garden. You will receive 8 premium cuttings approximately 6-8 inches in length. They are collected right after blooms which are in their prime condition for propagating. Also comes with a small bag of rooting hormone.',
      image: 'b81b61f14dccf376c6e4877633ae95d5',
      price: 15.00,
      quantity: 30
    },
    {
      name: 'Red Prize Azalea',
      category: categories[2]._id,
      description:
        'RED PRIZE belongs to the Azalea grouping known as Southern Indica Hybrids selected for their vigorous growth habits and sun tolerance and is a very hardy landscape plan. Three (3) very well-rooted, healthy growing starter size plants, shipped bare-root in a plastic bag. Plants will be a minimum of 3 to 6 inches tall.',
      image: 'cf4a84a256c96057c2f875e9d28e8792',
      price: 21.95,
      quantity: 10
    },
    {
      name: 'Star Jasmine',
      category: categories[2]._id,
      description:
        'Star Jasmine is a very popular evergreen vine that requires very little care. Grown for its fragrant white star shaped flowers on dense dark green foliage. Jasmine are prolific bloomers from spring through summer. You will receive 10 Star Jasmine Flowering Vine (NOT ROOTED) cuttings 10" - 12" long.',
      image: 'f413fb22b6af1932f5b5ab9fef43b7b5',
      price: 15.95,
      quantity: 20
    },
    {
      name: 'Spider Plant Cutting',
      category: categories[3]._id,
      description: 'The spider plant is considered one of the most adaptable of houseplants and the easiest to grow. This plant can grow in a wide range of conditions and suffers from few problems, other than brown tips. You will receive one 6 inch rooted cutting.',
      image: '7b395e1a376ec72387d7624c0dfef048',
      price: 3.99,
      quantity: 20
    },
    {
      name: 'Aloe Vera Pup',
      category: categories[3]._id,
      description:
        'This listing is for one (1) single Aloe pup. The Aloe pup will be taken from a healthy, thriving mother plant. Each aloe pup will vary in size, and most will be approximately 4 inches long (never shorter). They will be shipped freshly removed from the mother plant (rooted) in moist sphagnum moss and/or a moist paper towel.',
      image: '58587dedca9c596fa59c32c45ba34cd7',
      price: 5.99,
      quantity: 10
    },
    {
      name: 'Bromeliad Offsets',
      category: categories[3]._id,
      description:
        'Bromeliad plants provide an exotic touch to the home and bring a sense of the tropics and sun-kissed climates. Growing a bromeliad as a houseplant is easy and brings interesting texture and color to the interior garden. Package of Miscellaneous Bromeliad Offsets. Quantity of 5',
      image: '64241a427a3d193625f6ce062f0d7649',
      price: 15.00,
      quantity: 10
    },
    {
      name: "Crassula Buddha's Temple Succulent",
      category: categories[4]._id,
      description:
        'Resembling a Buddhist temple, this Crassula succulent has a perfectly symmetrical tower appearance that would please even the most pretentious succulent aficionado. Besides being a living sculpture, Crassula cv. is really easy to grow and care for. One two inch plant.',
      image: 'f375c7104876929cd91f984017ac24e1',
      price: 9.99,
      quantity: 10
    },
    {
      name: "Ten Sedum Cutting Mix",
      category: categories[4]._id,
      description:
        'Sedum offers lots of variety in texture, color, and growth habit. Like other succulents, sedum grow best with fill sun, light watering and excellent drainage. They are an indispensable succulent plant that has a place in any garden or succulent project. This set of 10 cuttings includes Little Missy, Coral Reef, Tricolor, Pachyclados and Brevifolium.',
      image: 'e8e872e6b195a99634da8ecd4b1c55dd',
      price: 9.99,
      quantity: 10
    },
    {
      name: "Campfire Succulent",
      category: categories[4]._id,
      description:
        'Crassula Capitella/ Campfire is a super tolerant succulent with beautiful yellow or red leaves. They love sunlight and grow fast all seasons. One rooted two inch plant.',
      image: '1d9b2e444a3e92453f3d3280c8c0913c',
      price: 5.99,
      quantity: 10
    },
    {
      name: "Silver Dollar Vine",
      category: categories[4]._id,
      description:
        'Xerosicyos Danguyi stem also known as "Silver Dollar", "Dollar Vine" and "Penny Plant". This is a beautiful climbing succulent vine. It is perfect for outside gardens since it can grow up 10 - 12 feet in height! It is a thick green succulent with round leaves. One four inch unrooted cutting.',
      image: 'sb04c8bad0161278f45c301da892c8da8',
      price: 4.99,
      quantity: 10
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    role: 'customer',
    firstName: 'Ann',
    lastName: 'Baker',
    email: 'ann@test.com',
    password: 'demo123123',
    orders: [
      {
        products: [products[11]._id, products[6]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    role: 'customer',
    firstName: 'Jordan',
    lastName: 'Murray',
    email: 'jordan@test.com',
    password: 'demo123123',
    orders: [
      {
        products: [products[12]._id, products[5]._id, products[2]._id]
      }
    ]
  });

  await User.create({
    role: 'admin',
    firstName: 'Stephanie',
    lastName: 'Smith',
    email: 'admin@test.com',
    password: 'demo123123',
  });

  console.log('users seeded');

  process.exit();
});
