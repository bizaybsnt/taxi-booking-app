import Api from './api';

class userService {
  register = async data => {
    try {
      let res = await Api.post('/driver/register', data);
      return res.body;
    } catch (error) {
      return false;
    }
  };
  
}

export default new userService();
