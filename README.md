# PneumoniaX
This project aims to develop a Convolutional Neural Network (CNN) for the identification of pneumonia from X-ray images. The CNN is specifically trained to classify X-ray images into three categories: normal, bacterial pneumonia, and Covid-induced pneumonia.

## Introduction
Pneumonia is a respiratory condition that can be caused by various factors, including bacteria and viruses such as COVID-19. Early and accurate diagnosis is crucial for effective treatment. This project leverages deep learning techniques, specifically CNNs, to automatically classify X-ray images into normal, bacterial pneumonia, or Covid-induced pneumonia categories.

![image](https://github.com/Wanderoooo/PneumoniaX/assets/137996848/9a2eaa82-e6bb-45d2-8e22-0983de44386d)

## Dataset
The model is trained on a curated dataset of X-ray images that include samples of normal lungs, bacterial pneumonia, and Covid-induced pneumonia. The dataset is obtained from Kaggle, containing 1k images per category

## Model Architecture
The CNN model consists of several convolutional layers, followed by max-pooling layers to reduce spatial dimensions. The architecture is as follows:

- Convolutional Layer (32 filters, 3x3 kernel, ReLU activation)
- MaxPooling Layer (2x2 pool size)
- Convolutional Layer (64 filters, 3x3 kernel, ReLU activation)
- MaxPooling Layer (2x2 pool size)
- Additional Convolutional and MaxPooling layers for further feature extraction
- Flatten Layer to convert 2D feature maps to a 1D vector
- Fully Connected Layer (Dense) with 64 neurons and ReLU activation
- Output Layer with n_classes neurons and softmax activation for multi-class classification.

## Model Compilation
The model is compiled using the Adam optimizer and Sparse Categorical Crossentropy as the loss function. Accuracy is used as the metric for evaluation.

## Training
The total dataset is split in the following ways:
Training dataset -> 80%
Validation dataset -> 10%
Test dataset -> 10%

### Data Augmentation
Images are resized to a specified height = 300 and width = 400. Rescaling is performed to normalize pixel values between 0 and 1.
Augmentation is applied to artificially increase the diversity of the training dataset; including horizontal and vertical flips and random rotations up to 0.2 radians.

The model is fitted on the training dataset with 50 epochs, with validation dataset used intermittenly to check model performance.

## Result
![image](https://github.com/Wanderoooo/PneumoniaX/assets/137996848/43e26038-9b63-4504-94d6-058c0fcb83bc)
![image](https://github.com/Wanderoooo/PneumoniaX/assets/137996848/0b98166b-7236-4153-b48e-e85906919664)

Model can predict pneumonia-positive images and cause of pneumonia with 95% accuracy; Exercise discretion when confidence is (<) 80%

![image](https://github.com/Wanderoooo/PneumoniaX/assets/137996848/ece11ba2-686b-4f97-a136-0b6740157c7c)
