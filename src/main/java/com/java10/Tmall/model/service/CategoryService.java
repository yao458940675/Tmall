package com.java10.Tmall.model.service;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

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
	public int getCategoryAmount(){
		return categoryMapper.getCategoryAmount();
	}
	public List<Category> getAllCategories(int pageSize,int pageNum,HttpServletRequest request){
		//分页查询 limit 需要起始行索引（0-based），行数
		Map<String,Object> map=new HashMap<>();
		int start=(pageNum-1)*pageSize;
		map.put("k_index", start);
		map.put("k_pageSize", pageSize);
		
		List<Category> list = categoryMapper.getAllCategories(map);
		
		for(Category c:list){
			File f = new File(request.getServletContext().getRealPath("img/cimg"),c.getId()+".jpg");
			if(f.exists()){
				c.setImgFlag(1);
			}else{
				c.setImgFlag(0);
			}
		}
		
		return list;
	}
	@Transactional
	public int saveCategory(String name){
		Category c=new Category();
		c.setName(name);
		categoryMapper.saveCategory(c);
		int id=c.getId();
		return id;
	}
	@Transactional
	public void deleteCategory(int id){
		categoryMapper.deleteCategory(id);
	}
	@Transactional
	public void updateCategory(String name,int id){
		Category c=new Category();
		c.setId(id);
		c.setName(name);
		categoryMapper.updateCategory(c);
	}
	//根据category id获得category name
	public String getCategoryById(int id){
		return categoryMapper.getCategoryById(id);
	}
	
}
