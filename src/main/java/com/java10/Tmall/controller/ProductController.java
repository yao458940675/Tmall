package com.java10.Tmall.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.java10.Tmall.model.bean.Product;
import com.java10.Tmall.model.service.ProductService;

@Controller
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@RequestMapping("getAllProduct/{pagesize}/{pagenum}/{cid}")
	@ResponseBody
	public List<Product> getAllProduct(@PathVariable int pagesize,@PathVariable int pagenum,@PathVariable int cid){
		//System.out.println(pagesize+"========"+pagenum+"========"+cid);
		return productService.selectAllProduct(pagesize, pagenum,cid);
	}

	
	@RequestMapping("saveProduct/{id}")
	@ResponseBody
	public String saveProduct(@PathVariable int id,Product p){
		//System.out.println("productname==========="+p.getName());
		productService.saveProduct(p, id);
		return "{\"result\":\"添加成功\"}";
	}
	
	
	@RequestMapping("deleteProductById/{id}")
	@ResponseBody
	public String deleteProductById(@PathVariable int id){
		//System.out.println("productname==========="+p.getName());
		productService.deleteProductById( id);
		return "{\"result\":\"删除成功\"}";
	}
	
	
	@RequestMapping("selectProductName/{id}")
	@ResponseBody
	public Product selectProductName(@PathVariable int id){
		//System.out.println("productname==========="+p.getName());
		return productService.selectProductName( id);
		
	}
	
	@RequestMapping("updateProductById/{id}")
	@ResponseBody
	public String updateProductById(@PathVariable int id,Product p){
		//System.out.println("productname==========="+p.getName());
		productService.updateProductById(p, id);
		return "{\"result\":\"编辑成功\"}";
	}
	@RequestMapping("getProduct/{cid}")
	@ResponseBody
	public int getProduct(@PathVariable int cid){
		return  productService.getProduct(cid);
	
	}
	
}
