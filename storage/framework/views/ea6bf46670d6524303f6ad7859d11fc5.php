<?php $__env->startSection('content'); ?>
    <h1>Типы</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Значение</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <?php $__currentLoopData = $types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($type->id); ?></td>
                    <td><?php echo e($type->name); ?></td>
                    <td><?php echo e($type->value); ?></td>
                    <td>
                        <a href="<?php echo e(route('admin.types.edit', $type->id)); ?>">Редактировать</a>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
<?php $__env->stopSection(); ?> 
<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/admin/Desktop/mysite-main-backup 3/my-laravel-project/resources/views/admin/types/index.blade.php ENDPATH**/ ?>