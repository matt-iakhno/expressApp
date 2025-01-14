test('This is a test that always passes', () => {
  expect(true).toBe(true);
});


test('This is a test that always fails', () => {
  expect(true).toBe(false);
});