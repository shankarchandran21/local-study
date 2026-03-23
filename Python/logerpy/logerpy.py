import logging
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    filename='loger.log',
    filemode='w'
    
)

logging.debug("This is a DEBUG log (for developers)")
logging.info("This is an INFO log")
logging.warning("This is a WARNING")
logging.error("This is an ERROR")
logging.critical("This is CRITICAL")
