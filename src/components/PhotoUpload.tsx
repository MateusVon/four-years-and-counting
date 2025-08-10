import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

import { Camera, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
}

interface PhotoUploadProps {
  onPhotosChange: (photos: Photo[]) => void;
  photos: Photo[];
}

const PhotoUpload = ({ onPhotosChange, photos }: PhotoUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoDescription, setNewPhotoDescription] = useState('');
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Erro',
        description: 'Por favor, selecione apenas arquivos de imagem.',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);

    // Create object URL for local display
    const photoUrl = URL.createObjectURL(file);

    const newPhoto: Photo = {
      id: Date.now().toString(),
      url: photoUrl,
      title: newPhotoTitle || 'Nova Memória',
      description: newPhotoDescription || 'Uma memória especial para nós',
    };

    onPhotosChange([...photos, newPhoto]);
    setNewPhotoTitle('');
    setNewPhotoDescription('');
    setUploading(false);

    toast({
      title: 'Sucesso!',
      description: 'Foto adicionada às suas memórias.',
    });
  };

  const removePhoto = (photoId: string) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== photoId);
    onPhotosChange(updatedPhotos);
    toast({
      title: 'Foto removida',
      description: 'A foto foi removida das suas memórias.',
    });
  };

  return (
    <div className="space-y-6">
      {/* Upload Form */}
      <Card className="bg-card shadow-soft border-border/50">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Adicionar Nova Foto
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Título da Memória
              </label>
              <Input
                value={newPhotoTitle}
                onChange={(e) => setNewPhotoTitle(e.target.value)}
                placeholder="Ex: Nossa primeira viagem juntos"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Descrição
              </label>
              <Input
                value={newPhotoDescription}
                onChange={(e) => setNewPhotoDescription(e.target.value)}
                placeholder="Conte sobre esse momento especial..."
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Selecionar Foto
              </label>
              <div className="relative">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload">
                  <Button
                    type="button"
                    variant="outline"
                    disabled={uploading}
                    className="w-full cursor-pointer"
                    asChild
                  >
                    <span>
                      {uploading ? (
                        <>
                          <Upload className="mr-2 animate-spin" size={20} />
                          Fazendo upload...
                        </>
                      ) : (
                        <>
                          <Camera className="mr-2" size={20} />
                          Escolher Foto
                        </>
                      )}
                    </span>
                  </Button>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Photos */}
      {photos.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              className="bg-card shadow-soft hover:shadow-romantic transition-all duration-500 border-border/50 overflow-hidden group hover-scale"
            >
              <div className="relative aspect-video">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removePhoto(photo.id)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <X size={16} />
                </Button>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground mb-1">
                  {photo.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {photo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
