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
	
	@RequestMapping("getAllProduct/{pagenum}")
	@ResponseBody
	public List<Product> getAllProduct(@PathVariable int pagenum){
		return productService.selectAllProduct(pagenum);
	}
}
