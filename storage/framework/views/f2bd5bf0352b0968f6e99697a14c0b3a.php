<?php $__env->startSection('content'); ?>
    <h1>Редактировать тип</h1>
    <form action="<?php echo e(route('admin.types.update', $type->id)); ?>" method="POST">
        <?php echo csrf_field(); ?>
        <div>
            <label for="name">Имя:</label>
            <input type="text" id="name" name="name" value="<?php echo e($type->name); ?>" required>
        </div>
        <div>
            <label for="value">Значение:</label>
            <input type="number" id="value" name="value" value="<?php echo e($type->value); ?>" required>
        </div>
        <input type="submit" value="Сохранить">
    </form>
<?php $__env->stopSection(); ?> 
<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/admin/Desktop/mysite-main-backup 3/my-laravel-project/resources/views/admin/types/edit.blade.php ENDPATH**/ ?>