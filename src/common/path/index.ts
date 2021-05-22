interface PathOptions {
  path: keyof typeof path;
  version: keyof typeof version;
}

const prefix = 'api';

const version = {
  1: 'v1',
  2: 'v2',
};

const path = {
  challenges: 'challenges',
  contests: 'contests',
};

export const getPath = (options: PathOptions): string =>
  `${prefix}/${version[options.version]}/${path[options.path]}`;
