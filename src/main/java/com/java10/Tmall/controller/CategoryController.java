package com.java10.Tmall.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.java10.Tmall.model.bean.Category;
import com.java10.Tmall.model.service.CategoryService;

@RestController
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("getAllCategories/{pageSize}/{pageNum}")
	public List<Category> getAllCategories(@PathVariable int pageSize,@PathVariable int pageNum ){
		//获得当前页面category信息
		return categoryService.getAllCategories(pageSize, pageNum);
	}
	@RequestMapping("getCategoryAmount")
	public int getCategoryAmount(){
		return categoryService.getCategoryAmount();
	}
	@RequestMapping("saveCategory/{name}")
	public int saveCategory(@PathVariable String name){
		return categoryService.saveCategory(name);
	}
	@RequestMapping("uploadCategoryImage")
	public String uploadCategoryImage(MultipartFile upload,HttpServletRequest request){
		//获取原始文件名
		System.out.println("123445");
		String filename=upload.getOriginalFilename();
		String path=request.getServletContext().getRealPath("/img/cimg");
		File file=new File(path,filename);
		try {
			upload.transferTo(file);
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "s";
		
	}
	
}
