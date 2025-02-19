import schedule
import time
from internship_spider import InternshipSpider
import logging

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('spider.log'),
        logging.StreamHandler()
    ]
)

def job():
    """定时执行的任务"""
    try:
        logging.info("开始执行爬虫任务")
        spider = InternshipSpider()
        spider.run()
        logging.info("爬虫任务执行完成")
    except Exception as e:
        logging.error(f"爬虫任务执行失败: {str(e)}")

def main():
    # 设置每天早上9点和下午3点运行
    schedule.every().day.at("09:00").do(job)
    schedule.every().day.at("15:00").do(job)
    
    logging.info("定时任务已启动")
    
    # 保持程序运行
    while True:
        schedule.run_pending()
        time.sleep(60)

if __name__ == '__main__':
    main() 