import json
import time
from datetime import datetime
import requests
from weibo_spider import Spider
import re
import os

class InternshipSpider:
    def __init__(self, config_path='config.json'):
        with open(config_path, 'r', encoding='utf-8') as f:
            self.config = json.load(f)
        
        # 实习关键词，可以根据需要修改
        self.keywords = ['实习', '招聘', 'intern', '校招']
        
        # 创建保存数据的目录
        self.data_dir = 'weibo_data'
        if not os.path.exists(self.data_dir):
            os.makedirs(self.data_dir)
    
    def is_internship_post(self, content):
        """判断是否为实习相关微博"""
        for keyword in self.keywords:
            if keyword in content:
                return True
        return False
    
    def process_weibo_content(self, weibo):
        """处理微博内容，提取关键信息"""
        return {
            'id': weibo['id'],
            'content': weibo['content'],
            'publish_time': weibo['publish_time'],
            'pictures': weibo.get('original_pictures', '无'),
            'url': f"https://weibo.com/{self.config['user_id_list'][0]}/{weibo['id']}",
        }
    
    def save_to_local(self, data):
        """保存数据到本地文件"""
        today = datetime.now().strftime('%Y-%m-%d')
        filename = os.path.join(self.data_dir, f'weibo_{today}.json')
        
        # 读取现有数据
        existing_data = []
        if os.path.exists(filename):
            with open(filename, 'r', encoding='utf-8') as f:
                try:
                    existing_data = json.load(f)
                except json.JSONDecodeError:
                    existing_data = []
        
        # 检查是否已存在相同ID的微博
        existing_ids = {item['id'] for item in existing_data}
        if data['id'] not in existing_ids:
            existing_data.append(data)
            
            # 保存更新后的数据
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(existing_data, f, ensure_ascii=False, indent=2)
            print(f"成功保存微博 {data['id']} 到文件 {filename}")
            return True
        return False
    
    def post_to_website(self, data):
        """发布到自己的网站（暂时不使用）"""
        return self.save_to_local(data)
    
    def run(self):
        """运行爬虫并处理结果"""
        # 更新配置中的起始日期为今天
        self.config['since_date'] = datetime.now().strftime('%Y-%m-%d')
        
        # 初始化爬虫
        spider = Spider(self.config)
        spider.start()
        
        # 处理爬取的微博
        for weibo in spider.weibo:
            if self.is_internship_post(weibo['content']):
                processed_data = self.process_weibo_content(weibo)
                success = self.save_to_local(processed_data)
                if success:
                    print(f"成功保存微博 {weibo['id']}")
                else:
                    print(f"微博 {weibo['id']} 已存在，跳过保存")
            
            # 添加延时避免请求过快
            time.sleep(2)

if __name__ == '__main__':
    spider = InternshipSpider()
    spider.run() 