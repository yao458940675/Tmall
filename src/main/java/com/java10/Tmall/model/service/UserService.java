package com.java10.Tmall.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java10.Tmall.model.bean.User;
import com.java10.Tmall.model.mapper.UserMapper;

@Service
public class UserService {

	@Autowired
	private UserMapper userMapper;
	public List<User> selectAllUser(int pagenum){
		Map<String,Object> map=new HashMap<>();
		map.put("k_pagenum", (pagenum-1)*3);
		map.put("k_pagesize", 3);
		return userMapper.selectAllUser(map);
				
	}
}
