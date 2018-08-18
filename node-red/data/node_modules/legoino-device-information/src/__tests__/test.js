'use strict';

const info = require('..');

describe('legoino-device-information test', () => {
  it('OpenBio', () => {
    expect(info.OpenBio).toMatchSnapshot();
  });
  it('OpenSpectro', () => {
    expect(info.OpenSpectro).toMatchSnapshot();
  });
  it('SimpleSpectro', () => {
    expect(info.SimpleSpectro).toMatchSnapshot();
  });
  it('Solar2015', () => {
    expect(info.Solar2015).toMatchSnapshot();
  });
});
