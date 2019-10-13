package com.java10.Tmall.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.java10.Tmall.model.bean.Category;
import com.java10.Tmall.model.service.CategoryService;

@Controller
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("getAllCategories/{pageSize}/{pageNum}")
	@ResponseBody
	public List<Category> getAllCategories(@PathVariable int pageSize,@PathVariable int pageNum ){
		System.out.println(pageSize);
		return categoryService.getAllCategories(pageSize, pageNum);
	}

	@RequestMapping("getCategoryAmount")
	@ResponseBody
	public int getCategoryAmount(){
		return categoryService.getCategoryAmount();
	}
	//添加分类，自动分配id
	@RequestMapping("saveCategory")
	@ResponseBody
	public void saveCategory(String categoryName,MultipartFile customFile,HttpServletRequest request){
		int id= categoryService.saveCategory(categoryName);
		String filename=id+".jpg";
		String path=request.getServletContext().getRealPath("/img/cimg");
		File file=new File(path,filename);
		
		if(file.exists()){
			file.delete();
		}
		try {
			customFile.transferTo(file);
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//编辑分类
	@RequestMapping("updateCategory/{id}")
	@ResponseBody
	public void updateCategory(@PathVariable int id,String categoryName,MultipartFile customFile,HttpServletRequest request){
		categoryService.updateCategory(categoryName, id);
		String filename=id+".jpg";
		String path=request.getServletContext().getRealPath("/img/cimg");
		File file=new File(path,filename);
		
		if(file.exists()){
			file.delete();
		}
		try {
			customFile.transferTo(file);
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//删除Category
	@RequestMapping("deleteCategory/{id}")
	@ResponseBody
	public void deleteCategory(@PathVariable int id){
		categoryService.deleteCategory(id);
	}
	
	
	
}
