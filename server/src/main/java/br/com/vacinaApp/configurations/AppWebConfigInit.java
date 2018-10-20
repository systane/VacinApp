package br.com.vacinaApp.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.Filter;

@Configuration
public class AppWebConfigInit extends AbstractAnnotationConfigDispatcherServletInitializer{
    @Override protected Class<?>[] getRootConfigClasses() {
        return new Class[]{AppWebConfig.class, JpaConfiguration.class};
    }

    @Override protected Class<?>[] getServletConfigClasses() {
        return new Class[]{};
    }

    @Override protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    @Override protected Filter[] getServletFilters() {
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
        characterEncodingFilter.setEncoding("UTF-8");
        return new Filter[]{characterEncodingFilter};
    }
}
