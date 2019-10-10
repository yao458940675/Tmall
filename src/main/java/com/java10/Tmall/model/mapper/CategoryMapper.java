package com.java10.Tmall.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Category;

@Mapper
public interface CategoryMapper {
	public List<Category> getAllCategories(Map<String,Object> map);
}
