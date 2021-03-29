import Api from '@helpers/service';

export async function getContacts(page = 1, results = 30) {
  try {
    const response = await Api.get(
      `/?page=${page}&results=${results}&exc=login,location,registered,dob`,
    );
    return response?.data?.results;
  } catch (err) {
    return 'error';
  }
}
