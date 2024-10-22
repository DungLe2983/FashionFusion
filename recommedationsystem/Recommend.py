import pymongo
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, jsonify, request
from bson import ObjectId
from flask_cors import CORS

# Khởi tạo ứng dụng Flask
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Thông tin kết nối MongoDB
mongo_uri = "mongodb+srv://phamthanhdong:dong@cluster0.w6pi9km.mongodb.net/fashionfusion"
db_name = "fashionfusion"
collection_name = "products"

# Kết nối tới MongoDB và lấy thông tin từ collection
client = pymongo.MongoClient(mongo_uri)
db = client[db_name]
collection = db[collection_name]

try:
    # Lấy tất cả tài liệu từ collection và chuyển đổi thành DataFrame Pandas
    documents = collection.find({})
    df_sanpham = pd.DataFrame(list(documents))
except Exception as e:
    print(f'Error: {e}')
finally:
    client.close()

# Định nghĩa danh sách các cột cần sử dụng để tính toán tương đồng
features = ['description', 'name']

# Tạo một hàm để kết hợp giá trị của hai cột trên
def combineFeatures(row):
    return str(row['name']) + " " + str(row['description'])

# Áp dụng hàm trên mỗi hàng trong DataFrame
df_sanpham['combinedFeatures'] = df_sanpham.apply(combineFeatures, axis=1)

# In ra đầu tiên của cột kết hợp để kiểm tra
# print(df_sanpham['combinedFeatures'].head())
# print(repr(df_sanpham['combinedFeatures'].head()))
print(df_sanpham['combinedFeatures'].head().to_string().encode('utf-8'))

# Sử dụng TfidfVectorizer để chuyển đổi văn bản thành ma trận số
tf = TfidfVectorizer()
tfMatrix = tf.fit_transform(df_sanpham['combinedFeatures'])

# Tính toán độ tương đồng giữa các sản phẩm dựa trên ma trận TF-IDF
similar = cosine_similarity(tfMatrix)

# Số lượng sản phẩm tương tự muốn trả về
number = 4

@app.route('/api', methods=['GET'])
def get_data():

    # Danh sách để lưu tên sản phẩm tương tự
    ket_qua = []

    # Lấy ID sản phẩm từ tham số query
    productId = request.args.get('id')
    productId = ObjectId(productId)

    # Kiểm tra xem ID có tồn tại trong DataFrame hay không
    if productId not in df_sanpham['_id'].values:
        return jsonify({'loi':'Id khong hop le'})

    # Lấy chỉ mục của sản phẩm dựa trên ID
    indexProduct = df_sanpham[df_sanpham['_id'] == productId].index[0]
    similarProduct = list(enumerate(similar[indexProduct]))

    sortedSimilarProduct = sorted(similarProduct, key=lambda x: x[1], reverse=True)

    # Hàm để lấy tên thương hiệu của sản phẩm dựa trên chỉ mục
    def lay_id(index):
        return (df_sanpham[df_sanpham.index == index]['_id'].values[0])

    # Lặp qua số lượng sản phẩm tương tự muốn trả về và thêm tên vào danh sách
    for i in range(1, number+1):
        id_str = str(lay_id(sortedSimilarProduct[i][0]))
        # In tên thương hiệu để kiểm tra
        print(id_str)
        # Thêm tên vào danh sách kết quả
        ket_qua.append(id_str)

    # Trả về kết quả dưới dạng JSON
    return jsonify(ket_qua)

# Chạy ứng dụng Flask
if __name__ == '__main__':
    app.run(port=5555)
