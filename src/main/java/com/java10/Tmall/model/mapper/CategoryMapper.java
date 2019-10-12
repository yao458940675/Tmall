package com.java10.Tmall.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.PathVariable;

import com.java10.Tmall.model.bean.Category;

@Mapper
public interface CategoryMapper {
	public int getCategoryAmount();
	public List<Category> getAllCategories(Map<String,Object> map);
	public void saveCategory(Category c);
	public void deleteCategory(int id);
}
