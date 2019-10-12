package com.java10.Tmall.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;


import com.java10.Tmall.model.bean.Category;
import com.java10.Tmall.model.mapper.CategoryMapper;

@Service
public class CategoryService {
	@Autowired
	private CategoryMapper categoryMapper;
	public List<Category> getAllCategories(int pageSize,int pageNum){
		//分页查询 limit 需要起始行索引（0-based），行数
		Map<String,Object> map=new HashMap<>();
		int start=(pageNum-1)*pageSize;
		map.put("k_index", start);
		map.put("k_pageSize", pageSize);
		return categoryMapper.getAllCategories(map);
	}
	@Transactional
	public void deleteCategory(@PathVariable int id){
		categoryMapper.deleteCategory(id);
	}
}
