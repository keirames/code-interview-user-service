const authProviders = [
  { name: 'google' },
  { name: 'facebook' },
  { name: 'github' },
];

const contests = [
  {
    id: 1,
    title: 'hash map',
    slug: `hash-map-${Date.now()}`,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: null,
  },
  {
    id: 2,
    title: 'sort',
    slug: `sort-${Date.now()}`,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: null,
  },
  {
    id: 3,
    title: 'starter',
    slug: `starter-${Date.now()}`,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: null,
  },
];

const plans = [
  {
    id: 1,
    name: 'free',
    creditsPerMonth: 100,
    pricePerMonth: 0,
  },
  {
    id: 2,
    name: 'premium',
    creditsPerMonth: 1000,
    pricePerMonth: 100,
  },
];

const challenges = [
  {
    id: 1,
    title: 'diff two array',
    slug: `diff-two-array-${new Date()}`,
    problem: '',
    inputFormat: '',
    outputFormat: '',
    challengeSeed: '',
    level: 'easy',
    points: 100,
    isPremium: false,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: null,
    contestId: 1,
  },
  {
    id: 2,
    title: 'selection sort',
    slug: `selection-sort-${new Date()}`,
    problem: '',
    inputFormat: '',
    outputFormat: '',
    challengeSeed: '',
    level: 'easy',
    points: 100,
    isPremium: false,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: null,
    contestId: 2,
  },
  {
    id: 3,
    title: 'binary sort',
    slug: `binary-sort-${new Date()}`,
    problem: '',
    inputFormat: '',
    outputFormat: '',
    challengeSeed: '',
    level: 'medium',
    points: 200,
    isPremium: false,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: null,
    contestId: 2,
  },
  {
    id: 4,
    title: 'quick sort',
    slug: `quick sort-${new Date()}`,
    problem: '',
    inputFormat: '',
    outputFormat: '',
    challengeSeed: '',
    level: 'medium',
    points: 200,
    isPremium: true,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: null,
    contestId: 1,
  },
];

const testCases = [
  {
    text: '',
    testString:
      'assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);',
    challengeId: 1,
  },
  {
    text: '',
    testString:
      'assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1);',
    challengeId: 1,
  },
  {
    text: '',
    testString:
      'assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"]);',
    challengeId: 1,
  },
  {
    text: '',
    testString:
      'assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2);',
    challengeId: 1,
  },
];

const subscriptions = [
  {
    startTime: new Date(),
    endTime: new Date(2020, 9),
    planId: 2,
    userId: 1,
  },
  {
    startTime: new Date(),
    endTime: new Date(2099, 9),
    planId: 1,
    userId: 2,
  },
];

module.exports = {
  authProviders,
  contests,
  challenges,
  plans,
  testCases,
  subscriptions,
};
