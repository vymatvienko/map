import ErrorRepository from '../app';

test('translateCheck', () => {
  const errorRepository = new ErrorRepository();
  const code = 21;
  const result = 'Ошибка №21';

  errorRepository.errors.set(21, 'Ошибка №21');

  const error = errorRepository.translate(code);

  expect(result).toEqual(error);
});

test('translateCheck', () => {
  const errorRepository = new ErrorRepository();
  const code = 212;
  const result = 'Unknown error';

  errorRepository.errors.set(21, 'Ошибка №21');

  const error = errorRepository.translate(code);

  expect(result).toEqual(error);
});
