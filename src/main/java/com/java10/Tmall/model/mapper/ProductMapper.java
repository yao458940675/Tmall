package com.java10.Tmall.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Product;

@Mapper
public interface ProductMapper {

	public List<Product> selectAllProduct(Map<String,Object> map);


<<<<<<< HEAD
	public List<Product> selectAllProduct(Map<String,Object> map);
=======
	public List<Product> selectAllProduct();

>>>>>>> branch 'master' of https://github.com/yao458940675/Tmall.git
}
