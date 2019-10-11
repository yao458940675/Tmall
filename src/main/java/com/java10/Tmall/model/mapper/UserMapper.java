package com.java10.Tmall.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.User;

@Mapper
public interface UserMapper {

	public List<User> selectAllUser(Map<String,Object> map);
}
