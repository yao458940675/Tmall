package com.java10.Tmall.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java10.Tmall.model.bean.Product;
import com.java10.Tmall.model.mapper.ProductMapper;

@Service
public class ProductService {

	
	@Autowired
	private ProductMapper productMapper;
	
	public List<Product> selectAllProduct(int pagenum){
		Map<String,Object> map=new HashMap<>();
		map.put("k_pagenum", (pagenum-1)*5);
		map.put("k_pagesize", 5);
		return productMapper.selectAllProduct(map);
	}
}
