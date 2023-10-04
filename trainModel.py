from ultralytics import YOLO
import torch

# Load a model
# model = YOLO('yolov8x.yaml')  # build a new model from YAML
model = YOLO('yolov8x.pt')  # load a pretrained model (recommended for training)
model = YOLO('yolov8x.yaml').load('yolov8x.pt')  # build from YAML and transfer weights

dataDIR = 'D:/Thesis/Real-Time-Crack-Detection-Model-Over-Railway-Tracks-using-YOLOv8/dataset/data.yaml'

# Train the model
def run():
    torch.multiprocessing.freeze_support()
    #Use the model
    results = model.train(data=dataDIR, epochs=1, batch=-1)  # train the model

if __name__ == '__main__':
    run()    
