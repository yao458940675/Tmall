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

import com.java10.Tmall.model.bean.ProductImage;
import com.java10.Tmall.model.service.ProductImageServe;

@Controller
public class ProductImageController {
	@Autowired
	private ProductImageServe productImageService;
	
	@RequestMapping("saveProductImage/{pid}/{type}")
	@ResponseBody
	public int saveProductImage(@PathVariable int pid, @PathVariable String type){
		return productImageService.saveProductImage(pid, type);
	}
	@RequestMapping("uploadProductImage")
	public void uploadProductImage(MultipartFile upload,HttpServletRequest request){
		String filename=upload.getOriginalFilename();
		String path=request.getServletContext().getRealPath("/img/chanpin");
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
	}
	@RequestMapping("getProductImages/{pid}")
	@ResponseBody
	public List<ProductImage> getProductImages(@PathVariable int pid){
		return productImageService.getProductImages(pid);
	}
	
	//删除图片
	@RequestMapping("deleteProductImage/{id}")
	@ResponseBody
	public String deleteProductImage(@PathVariable int id){
		productImageService.deleteProductImage(id);
		return "s";
	}
	
}
