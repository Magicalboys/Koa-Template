const connection = require("../app/database")

// 数据库操作
class UserService {
  // 1. 插入用户名和密码
  async create(user){
    // 获取用户 user 信息
    const { username ,password } = user;

    // 拼接 statment
    const statement = 'INSERT INTO `user` (username,password) VALUES (?,?);';

    // 执行 SQL 语句
    const [result] = await connection.execute(statement,[username,password]);
    // 异步函数 需要等待语句执行完,再进行下一步操作

    return result; 
  }

  // 2. 查询用户名是否已经存在
  async findUserByName(username){

    const statement = 'SELECT * FROM `user` WHERE username = ?;';

    const [value] = await connection.execute(statement,[username]);

    return value;
  }

  // 2. 获取除自身以外用户  
  async getAllUser(id){

    const stateAvatar = 'SELECT * FROM `user` WHERE id != ? order by `id`;';

    const [value] = await connection.execute(stateAvatar,[id]);

    return value;
  }

  // 3. 设置用户名
  async setName(userId,data){
    // 获取用户 Image 信息
    const { username } = data;

    // 拼接 statment
    const statement = 'UPDATE `user` SET username = ? WHERE id = ?;';

    // 执行 SQL 语句
    const [result] = await connection.execute(statement,[username,userId]);
    // 异步函数 需要等待语句执行完,再进行下一步操作

    return result; 
  }
  // 4. 设置头像
  async setAvatar(userId,data){
    // 获取用户 Image 信息
    const {avatarImage} = data;

    // 拼接 statment
    const statement = 'UPDATE `user` SET avatarImage = ? WHERE id = ?;';

    // 执行 SQL 语句
    const [result] = await connection.execute(statement,[avatarImage,userId]);
    // 异步函数 需要等待语句执行完,再进行下一步操作

    return result; 
  }
  // 5. 查询头像
  async findAvatar(username){
    
    // 拼接 statment
    const stateAvatarImage = 'SELECT avatarImage FROM `user` WHERE username = ?;';

    // 执行 SQL 语句
    const [avatarImage] = await connection.execute(stateAvatarImage,[username]);
    
    return avatarImage;
  }

}

module.exports = new UserService()