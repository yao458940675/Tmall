package com.java10.Tmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.java10.Tmall.model.bean.User;
import com.java10.Tmall.model.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("selectAllUser/{pagenum}")
	@ResponseBody
	public List<User> selectAllUser(@PathVariable int pagenum){
		return userService.selectAllUser(pagenum);
	}
}
