package com.java10.Tmall.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Product;

@Mapper
public interface ProductMapper {

	public List<Product> selectAllProduct();
}
