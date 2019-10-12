package com.java10.Tmall.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.java10.Tmall.model.bean.ProductImage;
import com.java10.Tmall.model.mapper.ProductImageMapper;

@Service
public class ProductImageServe {
	@Autowired
	private ProductImageMapper productImageMapper;
	@Transactional
	public int saveProductImage(int pid,String type){
		ProductImage pi=new ProductImage();
		pi.setPid(pid);;
		pi.setType(type);
		productImageMapper.saveProductImage(pi);
		int id=pi.getId();
		return id;
	}
	
	public List<ProductImage> getProductImages(int pid){
		return productImageMapper.getProductImages(pid);
	}
	@Transactional
	public void deleteProductImage(@PathVariable int id){
		productImageMapper.deleteProductImage(id);
	}
}
