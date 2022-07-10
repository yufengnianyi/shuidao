package com.example.demo.service;

import com.example.demo.controller.dto.UserDTO;
import com.example.demo.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author yufengnianyi
 * @since 2022-06-07
 */
public interface IUserService extends IService<User> {

    UserDTO login(UserDTO userDTO);

    User register(UserDTO userDTO);
}
