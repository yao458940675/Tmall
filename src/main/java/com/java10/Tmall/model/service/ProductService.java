package com.java10.Tmall.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java10.Tmall.model.bean.Product;
import com.java10.Tmall.model.mapper.ProductMapper;

@Service
public class ProductService {

	
	@Autowired
	private ProductMapper productMapper;
	
	public List<Product> selectAllProduct(){
		return productMapper.selectAllProduct();
	}
}
