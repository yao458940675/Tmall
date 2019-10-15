package com.java10.Tmall.model.mapper;

import java.util.List;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Product;

@Mapper
public interface ProductMapper {

	public List<Product> selectAllProduct(Map<String,Object> map);
	public void saveProduct(Product p);
	public void deleteProductById(int id);
	public Product selectProductName(int id);
	public void updateProductById(Product p);
	public int getProduct(int cid);
}
