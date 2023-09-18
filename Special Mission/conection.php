<?php
    class crud{
        public static function conect()
        {
           try {
            $con=new PDO('mysqli:localhost=host; dbname=crudsystem','root','');
            return $con;
           } catch (PDOException $error1) {
                echo 'Something went wrong, with you conection!'.$error1->getMessage();
           }catch (Exception $error2){
                 echo 'Generic error!'.$error2->getMessage();
           }
        }
        public static function Selectdata()
        {
            $data=array();
            $p=crud::conect()->prepare('SELECT * FROM crudtable');
            $p->execute();
           $data=$p->fetchAll(PDO::FETCH_ASSOC);
           return $data;
        }
        public static function delete($id)
        {
            $p=crud::conect()->prepare('DELETE FROM crudtable WHERE id=:id');
            $p->bindValue(':id',$id);
            $p->execute();
        }
public static function userDataPerId($id)
{
    $data=array();
    $p=crud::conect()->prepare('SELECT * FROM crudtable WHERE id=:id');
    $p->bindValue(':id',$id);
    $p->execute();
   $data=$p->fetch(PDO::FETCH_ASSOC);
   return $data;
}




    }





?>