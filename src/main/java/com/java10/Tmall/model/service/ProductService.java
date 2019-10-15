package com.java10.Tmall.model.service;


import java.util.Date;
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
	
	public List<Product> selectAllProduct(int pagesize,int pagenum,int cid){
		Map<String, Object> map = new HashMap<>();
		map.put("k_pagesize", pagesize);
		map.put("k_beginIndex", (pagenum-1)*pagesize);
		map.put("k_cid", cid);
		System.out.println(pagesize+"========"+(pagenum-1)*pagesize+"========"+cid);
		return productMapper.selectAllProduct(map);

	}
	public void saveProduct(Product p,int pid){
		
		p.setName(p.getName());
		p.setSubTitle(p.getSubTitle());
		p.setOriginalPrice(p.getOriginalPrice());
		p.setPromotePrice(p.getPromotePrice());
		p.setStock(p.getStock());
		p.setCid(pid);
		p.setCreateDate(new java.sql.Date(new Date().getTime()));
		productMapper.saveProduct(p);
	}
	public void deleteProductById(int id) {
		// TODO Auto-generated method stub
		productMapper.deleteProductById(id);
	}
	public Product selectProductName( int id) {
		// TODO Auto-generated method stub
		return productMapper.selectProductName(id);
	}
	public void updateProductById(Product p, int id) {
		// TODO Auto-generated method stub
		p.setId(id);
		p.setCreateDate(new java.sql.Date(new Date().getTime()));
		productMapper.updateProductById(p);
	}
	public int getProduct(int cid) {
		return productMapper.getProduct(cid);
	}
	
	
}
