package com.java10.Tmall.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.ProductImage;

@Mapper
public interface ProductImageMapper {
	public void saveProductImage(ProductImage pi);
	public List<ProductImage> getProductImages(int pid);
	public void deleteProductImage(int id);
}
