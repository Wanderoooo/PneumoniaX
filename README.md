# PneumoniaX
This project aims to develop a Convolutional Neural Network (CNN) for the identification of pneumonia from X-ray images. The CNN is specifically trained to classify X-ray images into three categories: normal, bacterial pneumonia, and Covid-induced pneumonia.

## Introduction
Pneumonia is a respiratory condition that can be caused by various factors, including bacteria and viruses such as COVID-19. Early and accurate diagnosis is crucial for effective treatment. This project leverages deep learning techniques, specifically CNNs, to automatically classify X-ray images into normal, bacterial pneumonia, or Covid-induced pneumonia categories.

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

The model is fitted on the training dataset with 50 epochs.

![image](https://github.com/Wanderoooo/PneumoniaX/assets/137996848/9a2eaa82-e6bb-45d2-8e22-0983de44386d)
