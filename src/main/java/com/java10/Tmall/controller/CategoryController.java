package com.java10.Tmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java10.Tmall.model.bean.Category;
import com.java10.Tmall.model.service.CategoryService;

@RestController
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("getAllCategories/{pageSize}/{pageNum}")
	public List<Category> getAllCategories(@PathVariable int pageSize,@PathVariable int pageNum ){
		System.out.println(pageSize);
		return categoryService.getAllCategories(pageSize, pageNum);
	}
}
